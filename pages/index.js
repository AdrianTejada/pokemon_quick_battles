import { Background } from "@/Comps/Background"
import styled from "styled-components"
import logo from '@/public/assets/logo.png'
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

const TextInput = styled.input`
  font-size: 20px;
  margin-top: 5px;
  width: 250px;
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

const SignupButtCont = styled.div`
  position: relative;
  align-self: center;
  /* height: 200px; */
  justify-content: space-between;
  flex-direction: column;
  /* background-color:red; */
  top: 80px;
  align-items: center;
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
  <LoginCont>
      <TextInput type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
      <TextInput type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
      <ButtonCont>
        <Button text="Login" onClick={async ()=>{
          const result = await axios.post('https://pokemon-api-bcit.herokuapp.com/login', {
            email,
            password
          })
          if (result.data == "user not found"){
            alert("Wrong Credentials :c")
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
        <Button text="Sign Up" onClick={async ()=>{
          const result = await axios.post('https://pokemon-api-bcit.herokuapp.com/signup', {
            email,
            username,
            password
          })
          setSignup(false)
        }}/>
        <LinkText onClick={()=>setSignup(false)}>Back to Login</LinkText>
      </SignupButtCont>
    </SignupCont>}
</Main>
}

