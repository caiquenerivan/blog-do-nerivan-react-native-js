import { Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {forwardRef} from "react";



export const Button= forwardRef(({title, corTexto, corFundo, fonte,...rest}, ref)=>{

    return(
        <TouchableOpacity 
            ref={ref}
            style={{width: '100%', padding: 16, backgroundColor: `${corFundo}`, justifyContent:"center", alignItems:"center", borderRadius: 10}}
            {...rest}
            >
            
            <Text style={{fontSize: 25, fontFamily:'Roboto_400Regular', color:`${corTexto}`, textTransform: "uppercase"}}> 
                {title}
            </Text>
        </TouchableOpacity>
    )
})