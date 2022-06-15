import { Background } from "@/Comps/Background"
import styled from "styled-components"
import logo from '@/public/assets/logo.png'
import question from '@/public/instructions/question.png'
import Image from "next/image"
import Button from "../Comps/Button"
import { useRouter } from "next/router"
import { useState } from "react";
import { useProvider } from "@/utils/provider"
import { themetext } from "@/Comps/variable"
import axios from "axios"

const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const LoginCont = styled.div`
  margin-top: 30px;
  /* height: 70px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`
const TextInputCont = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 3vh;
`
const TextInput = styled.input`
  font-size: 20px;
  margin: 0.2em 0;
  padding: 0.5em 0.7em;
  border-radius: 10em;
  width: 17em;
`

const Text = styled.p`
 color: ${props=>props.color};
 font-size: 20px;
`

const Link = styled.span`
  color: blue;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const LinkText = styled.div`
  color: blue;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  margin-top: 20px;
`

const SignupCont = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  background-color: rgba(148, 148, 148, 0.8);
  padding: 2em 2em;
  border-radius: 1vw;
  height: max-content;
`
const SignUpHeader = styled.div`
font-family: Share Tech;
font-size: 2em;
width: 100%;
text-align: center;

margin: 1vw 0;
`
const FieldText = styled.p`
 color: ${props=>props.color};
 font-size: 20px;
 align-self: flex-start;
`

const FieldCont = styled.div`
  width: 440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
const RowCenter = styled.div`
width: 100%;
display: flex;
justify-content: center;
`
const QuestionCont = styled.div`
position: absolute;
top: 10px;
right: 10px;
`

const SignupButtCont = styled.div`
  position: relative;
  align-self: center;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
`



export default function Home() {
  const router = useRouter()
  const {theme} = useProvider()
  const [signup, setSignup] = useState(false)

  const [username, setUser] = useState()
  const [email, setEmail] = useState()
  const [email_C, setEmail_C] = useState()
  const [password, setPassword] = useState()
  const [password_C, setPassword_C] = useState()
  const [storagetxt, setStoragetxt] = useState()

  return <Main>
    <Background/> 
    {signup===false?<div>
  <Image
  src={logo}
  />

  <QuestionCont>
    <Image
    src={question} onClick={()=>router.push('/tutorial')}
    width="50px"
    height="50px"
    />
    </QuestionCont>
  <LoginCont>
    <TextInputCont>
      <TextInput type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
      <TextInput type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
    </TextInputCont>
      
      <ButtonCont>
        <Button text="Login" onClick={async ()=>{
          const result = await axios.post('https://pokemon-api-bcit.herokuapp.com/login', {
          // const result = await axios.post('http://localhost:5000/login', {
            email,
            password
          })
          console.log(result.data)
          if (result.data == "user not found" || result.data == "could not login"){
            alert("Wrong Credentials")
          } else {
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('username', result.data.username)
            router.push('/stadium')
          }
        }}/>
      </ButtonCont>
      <Text color={themetext[theme]}>
        Don&apos;t have an account? Click <Link onClick={()=>setSignup(true)}>here</Link> to sign up!
      </Text>
    </LoginCont>
    </div>
    :<SignupCont>

      
      <SignUpHeader>
        Sign up now!
      </SignUpHeader>

      <FieldCont>
        <FieldText>Username</FieldText>
        <TextInput onChange={(e)=>setUser(e.target.value)}/>
      </FieldCont>

      <Row>
        <FieldCont>
          <FieldText>Email</FieldText>
          <TextInput onChange={(e)=>setEmail(e.target.value)}/>
        </FieldCont>

        <FieldCont>
          <FieldText>Confirm Email</FieldText>
          <TextInput onChange={(e)=>setEmail_C(e.target.value)}/>
        </FieldCont>
      </Row>

      <Row>
      <FieldCont>
        <FieldText>Password</FieldText>
        <TextInput onChange={(e)=>setPassword(e.target.value)} type="password"/>
      </FieldCont>
      <FieldCont>
        <FieldText>Confirm Password</FieldText>
        <TextInput onChange={(e)=>setPassword_C(e.target.value)} type="password"/>
      </FieldCont>
      </Row>

      <SignupButtCont>
        <RowCenter>
          <Button text="Sign Up" onClick={async ()=>{
            const result = await axios.post('https://pokemon-api-bcit.herokuapp.com/signup', {
            // const result = await axios.post('http://localhost:5000/signup', {
              email,
              username,
              password
            })
            setSignup(false)
            }}
          />
        </RowCenter>
        
        <RowCenter>
          <LinkText onClick={()=>setSignup(false)}>Back to Login</LinkText>
        </RowCenter>
        
      </SignupButtCont>
    </SignupCont>}
</Main>
}

