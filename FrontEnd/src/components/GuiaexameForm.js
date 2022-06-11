import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import React from 'react'
import ConfirmDialog from '../ui/ConfirmDialog'

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: '80%',
    margin: '0 auto',
    '& .MuiFormControl-root': {
      minWidth: '200px',
      maxWidth: '500px',
      margin: '0 24px 24px 0'
    }
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: '36px'
  }
}))

export default function GuiexameForm() {
  const classes = useStyles()

  const [guiaexame, setGuiaexame] = useState({
    gui_codigo: null,
    gui_ativoinativo: 'A',
    gui_numeroguia: '',
    gui_exame: '',
    int_codigo: ''
  })
  const [currentId, setCurrentId] = useState()

  const [sendBtnStatus, setSendBtnStatus] = useState({
    disabled: false,
    label: 'Enviar'
  })

  const [sbStatus, setSbStatus] = useState({
    open: false,
    severity: 'success',
    message: '' 
  })


  const [isModified, setIsModified] = useState(false)

  const [dialogOpen, setDialogOpen] = useState(false) // O diálogo de confirmação está aberto?

  const [title, setTitle] = useState('Cadastrar novo paciente')

  const history = useHistory()
  const params = useParams()

  // useEffect() para quando o formulário for carregado (só na inicialização)
  useEffect(() => {
    // Verificamos se a rota atual contém o parâmetro id
    // Em caso positivo, buscamos os dados no back-end e carregamos o formulário para edição
    if(params.gui_codigo) {
      setTitle('Editar Guia')
      getData(params.gui_codigo)
    }
  }, [])

  async function getData(id) {
    try {
      let response = await axios.get(`http://localhost:3333/guiaexame/${id}`)
      setGuiaexame(response.data)
    }
    catch(error) {
      setSbStatus({
        open: true,
        severity: 'error',
        message: 'Não foi possível carregar os dados para edição.'
      })
    }
  }

  function handleInputChange(event, prop) {

    const guiaexameTemp = {...guiaexame}

    setCurrentId(event.target.id)

    if(event.target.id) {
      prop = event.target.id
    }
    else {
      // Quando o nome de uma propriedade de objeto aparece entre [],
      // significa que o nome da propriedade será determinado pela
      // variável ou expressão contida dentro dos colchetes
      guiaexameTemp[prop] = event.target.value
    }
    setGuiaexame({...guiaexameTemp, [prop]: event.target.value})
    setIsModified(true)   // O formulário foi modificado
  }

  async function saveData() {
    try {
      // Desabilita o botão de enviar para evitar envios duplicados
      setSendBtnStatus({disabled: true, label: 'Enviando...'})
      
      // Se estivermos editando, precisamos enviar os dados com o verbo HTTP PUT
      console.log(guiaexame)
      guiaexame.gui_codigo = params.id
      if(params.id) await axios.put(`http://localhost:3333/guiaexame`, guiaexame) 
      
      // Senão, estaremos criando um novo registro, e o verbo HTTP a ser usado é o POST
      else await axios.post('http://localhost:3333/guiaexame', guiaexame)
      
      // Mostra a SnackBar
      setSbStatus({open: true, severity: 'success', message: 'Dados salvos com sucesso!'})
      
    }
    catch(error) {
      // Mostra a SnackBar
      setSbStatus({open: true, severity: 'error', message: 'ERRO: ' + error.message})
    }
    // Restaura o estado inicial do botão de envio
    setSendBtnStatus({disabled: false, label: 'Enviar'})
  }

  function handleSubmit(event) {

    event.preventDefault()    // Evita que a página seja recarregada

    // Só envia para o banco de dados se o formulário for válido
    saveData()

  }

  function handleSbClose() {
    setSbStatus({...sbStatus, open: false})

    // Retorna para a página de listagem em caso de sucesso
    if(sbStatus.severity === 'success') history.push('/guiaexame')
  }

  function handleDialogClose(result) {
    setDialogOpen(false)

    // Se o usuário concordou em voltar 
    if(result) history.push('/guiaexame')
  }

  function handleGoBack() {
    // Se o formulário tiver sido modificado, exibimos o diálogo de confirmação
    if(isModified) setDialogOpen(true)
    // Senão, podemos voltar diretamente para a listagem
    else history.push('/list')
  }

  return (
    <>

      <ConfirmDialog isOpen={dialogOpen} onClose={handleDialogClose}>
        Há dados não salvos. Deseja realmente voltar?
      </ConfirmDialog>

      <Snackbar open={sbStatus.open} autoHideDuration={6000} onClose={handleSbClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSbClose} severity={sbStatus.severity}>
          {sbStatus.message}
        </MuiAlert>
      </Snackbar>

      <h1>{title}</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        
        <TextField 
          id="gui_numeroguia" 
          label="Nº da guia" 
          variant="filled"
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o nome do paciente"
          fullWidth
        />

        <TextField 
          id="gui_exame" 
          label="Exame" 
          variant="filled"
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o convenio do paciente"
          fullWidth
        />

        <TextField 
          id="int_codigo" 
          label="Cód. Internação" 
          variant="filled"
          onChange={handleInputChange}
          required  /* not null, precisa ser preenchido */
          placeholder="Informe o nome do medico!"
          fullWidth
        >
        </TextField>

        <Toolbar className={classes.toolbar}>
          <Button type="submit" variant="contained" color="secondary" disabled={sendBtnStatus.disabled}>
            {sendBtnStatus.label}
          </Button>
          <Button variant="contained" onClick={handleGoBack}>Voltar</Button>
        </Toolbar>
      </form>
    </>
  )
}