import React from 'react';
import { View, FlatList } from 'react-native';
import Comentarios from './index';  // Importe o componente de comentários

const ComentariosLista = ({ comentarios }) => {
  return (
    <FlatList
      data={comentarios}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Comentarios comentario={item} />  {/* Passe o comentário como uma propriedade */}
        </View>
      )}
    />
  );
};

export default ComentariosLista;
