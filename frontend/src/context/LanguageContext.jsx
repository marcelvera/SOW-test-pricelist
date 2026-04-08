import React, {useState, useEffect, createContext} from "react";
import { publicInstance } from "../services/Api";

export const LenguageContext = createContext()

export const LenguageProvider = ({children}) =>{

    const [lang, setLang] = useState( localStorage.getItem('user_lang') || 'content_en')
    const [text, setText] = useState([])

    useEffect( () => { 
        localStorage.setItem('user_lang', lang)
        publicInstance.get('api/lang/' )
        .then(response => {
            const data = {}
            response.data.forEach(element => {
                data[element.key_text_ui] = {
                    content_en : element.content_en,
                    content_sw : element.content_sw
                }
            });
            setText(data)
        })
        .catch(error => {
            if (error .response){
                console.log(error .response)
            }
            if (error .massage){
                console.log(error .massage)
            }
        })
    }, [])
    
    const valueText = (keyText) =>{
        if(!text[keyText]){
            return keyText
        }
        return text[keyText][lang]
    }

    return(
        <LenguageContext value={{lang, setLang, valueText}}>
            {children}
        </LenguageContext>
    )
    
}