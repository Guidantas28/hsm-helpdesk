import User from "@/models/User";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

const options = NextAuth ({
    providers: [CredentialsProvider({
        id: "Credentials",
        name: "Credentials",
        async authorize(credentials) {
            await connect();

            try{
                const user = await User.findOne({
                    email: credentials.email,
                })
                if (user){
                    const validPassword = await bcrypt.compare(credentials.senha, user.senha);
                
                if(validPassword){
                    return user;
                } else {
                    throw new Error("Senha inválida");
                } 
            } else {
                throw new Error("Email não cadastrado");
            }
            } catch{
                throw new Error("Erro ao autenticar usuário");
            }
        }
    })],
    pages:{
        error: "/login",
    }
})

export {options as GET, options as POST};

