import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    nome: yup.string().min(3, "Digite 3 caracteres ou mais").required("Campo obrigatório"),
    email: yup.string().email('E-mail inválido').required("Campo obrigatório"),
    senha: yup.string().min(8, "Digite 8 caracteres ou mais").required("Campo obrigatório"),
  })
  .required()

import { Container, Title, Column, TitleLogin, SubtitleLogin, Disclaimer, CriarText, Row, Wrapper } from './styles';

export default function SignUp () {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        reValidateMode: 'onSubmit',
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const onSubmit = async (formData) => {
        try {
            // Verifica se o usuário já existe pelo email
            const { data: users } = await api.get(`/users?email=${formData.email}`);
            
            if (users.length > 0) {
                alert('Já existe um usuário cadastrado com este e-mail');
                return;
            }

            // Se não existe, cria o novo usuário
            const response = await api.post('/users', {
                nome: formData.nome,
                email: formData.email,
                senha: formData.senha
            });

            if (response.status === 201) {
                alert('Cadastro realizado com sucesso!');
                // Redireciona para a página de login após cadastro
                navigate('/login');
            }
            
        } catch (e) {
            console.error('Erro no cadastro:', e);
            alert('Erro ao fazer cadastro, tente novamente mais tarde');
        }
    };

    const handleClickLogin = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Começe agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        placeholder="Seu Nome" 
                        leftIcon={<MdPerson />} 
                        name="nome"
                        errorMessage={errors?.nome?.message} 
                        control={control}
                        required
                    />
                    <Input 
                        placeholder="E-mail" 
                        leftIcon={<MdEmail />} 
                        name="email"
                        errorMessage={errors?.email?.message} 
                        control={control}
                        required
                    />
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        leftIcon={<MdLock />} 
                        name="senha" 
                        errorMessage={errors?.senha?.message} 
                        control={control}
                        required
                    />
                    <Button 
                        title={isSubmitting ? "Cadastrando..." : "Criar minha conta"} 
                        variant="secondary" 
                        type="submit"
                        disabled={isSubmitting}
                    />
                </form>
                <Disclaimer>
                    Ao clicar em "Criar minha conta", declaro que aceito as políticas de privacidade e os termos de uso da DIO.
                </Disclaimer>
                <Row>
                    <p>Já tenho conta!</p>
                    <CriarText onClick={handleClickLogin}> Fazer Login </CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}