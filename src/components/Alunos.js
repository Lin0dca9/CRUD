import React, {useState} from 'react';
import {Table} from 'react-bootstrap';
import api from '../services/api';
import Swal from 'sweetalert2';




const Alunos = (props) => {
const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [telefone, setTelefone] = useState('')
const [nomeNovo, setNomeNovo] = useState('')
const [emailNovo, setEmailNovo] = useState('')
const [telefoneNovo, setTelefoneNovo] = useState('')




    async function Tomate(){
        const resposta = await api.get('/alunos')
        console.log(resposta.data)
        setAlunos(resposta.data) //set-> permite armazenar valores exclusivos de qualquer tipo.

    }

    async function Batata(){
        try{
            const teste = await api.post('/alunos',{"id":8,"nome":"Ronaldo", "email":"ronaldo@gmail.com", "telefone":"7070770"})
            console.log(teste)
        }catch(error){
            console.log(error)
            console.log(error?.response)
        }
      
    }

    async function Abacate(laranja){
        const excluir = await api.delete('/alunos/'+laranja)
        console.log(excluir)
        Tomate()
    }
    async function Update(laranja){
        const update = await api.put('/alunos/'+laranja,{"id":8,"nome":"Ronaldo", "email":"ronaldo@gmail.com", "telefone":"7070770"})
        console.log()
        Tomate()
    }


    function soma(a,b){
        return(a+b)
    }
    soma(3,4)
    const [alunos, setAlunos] = useState([]);


    async function enviar(form){
        form.preventDefault()
        try{
        
        const teste = await api.post('/alunos',{"nome":nome, "email":email, "telefone":telefone})
        console.log(teste)
       // Tomate()
    }catch(error){
        console.log(error)
        console.log(error?.response)
    }
    }
  
    async function updateStudent (form) {
        form.preventDefault()
        try{
         const update = await api.put('/alunos/'+id,{"nome":nomeNovo, "email":emailNovo, "telefone":telefoneNovo})
        
        Tomate()
        setOpen(false)
    }catch(error){
        console.log(error)
        console.log(error?.response)
    }
    }
        const [open, setOpen] = useState(false)

        const [id, setId] = useState('')

        return(
      
        <div >
            {
                open && ( <div style={{display:'flex',position: 'absolute', width:'100vw', height:'50vh', backgroundColor:'white', zIndex:'2', margin:'auto'}}>
                            <div style={{margin:'auto', display:'flex', flexDirection:'column', flexWrap:'wrap', width:'50%', padding:'1rem 2rem', backgroundColor:'white', borderRadius:'0.5rem', boxShadow:'0 3px 6px gray'}}>
                                <form onSubmit={updateStudent} >
                                    <input required value={nomeNovo} onChange={(input)=>{setNomeNovo(input.target.value)}} placeholder='nome'/>
                                    <input required type={'email'} value={emailNovo} onChange={(email)=>{setEmailNovo(email.target.value)}} placeholder='email'/>
                                    <input required type={'number'}value={telefoneNovo} onChange={(telefone)=>{setTelefoneNovo(telefone.target.value)}} placeholder='telefone'/>
                                    <button type='submit'>Enviar</button>
                                    <button onClick={()=> {setOpen(false)}}>Cancelar</button>
                                </form>
                            </div>
                        </div>)
            }
            <Table striped bordered hover>           
                <button onClick={()=>{Tomate()}}>texto</button>   {/*Execução da função Tomate*/}
                <button onClick={()=>{Batata()}}>texto4</button>
                <button onClick={()=>{Update()}}>Atualizar</button>
               
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Opções</th>
                    </tr>
                    </thead>
                    <tbody>
                         {alunos.map((aluno) =>
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>{aluno.telefone}</td>
                                <td><button onClick={()=> {setOpen(true); setId(aluno.id)}}>Editar</button>  <button onClick={()=>{Abacate(aluno.id)}}>Delete</button></td>
                                
                            </tr>
                            )
                        }

                       
                    </tbody>  
            </Table>
            <form onSubmit={enviar} >
                <input required value={nome} onChange={(input)=>{setNome(input.target.value)}} placeholder='nome'/>
                <input required type={'email'} value={email} onChange={(email)=>{setEmail(email.target.value)}} placeholder='email'/>
                <input required type={'number'}value={telefone} onChange={(telefone)=>{setTelefone(telefone.target.value)}} placeholder='telefone'/>
                <button type='submit'>Enviar</button>
            </form>

           
        </div>
    )
}
export default Alunos;