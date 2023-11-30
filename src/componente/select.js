import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import {Picker} from '@react-native-picker/picker';


function Select(){
    const [cursos] = useState(["Mão                                               R$25,00","Pé                                                   R$25,00","Mão e Pé                                       R$45,00"])
    const [cursoSelecionado, setCursoSelecionado]= useState([])
    return(
        <View>
            <Picker
  selectedValue={cursoSelecionado}
  style={styles.input}
  onValueChange={(itemValue) => setCursoSelecionado(itemValue)
  }>
    {
        cursos.map(cr=>{
            return <Picker.Item label={cr} value={cr} />
        })
    }
</Picker>
        </View>
    )
}
export default Select;

const styles = StyleSheet.create({

    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#E4BBB7',
      height: 40,
      marginBottom: 12,
      fontSize: 16,
      color: '#E4BBB7',
    },
  
  
  })