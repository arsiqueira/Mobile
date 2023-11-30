import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';
import * as ImagePicker from 'expo-image-picker';
import Swipeable from 'react-native-swipeable';

const BotaoAdicionarComentario = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.botaoAdicionarComentario}>
    <Text style={{ color: 'white', textAlign: 'center' }}>Adicionar Comentário</Text>
  </TouchableOpacity>
);

const Comentarios = ({ navigation }) => {
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');
  const [usuario, setUsuario] = useState('');
  const [avaliacao, setAvaliacao] = useState(0);
  const [imagem, setImagem] = useState(null);
  const tooltipRef = useRef(null);
  const [comentarioEditando, setComentarioEditando] = useState(null);

  const adicionarComentario = () => {
    if (novoComentario && avaliacao > 0) {
      const novoComentarioObj = {
        id: Math.random().toString(),
        texto: novoComentario,
        usuario: usuario,
        avaliacao: avaliacao,
        avaliacaoTexto: escalaAvaliacao[avaliacao - 1],
        imagem: imagem,
        data: new Date().toISOString(),
        postado: true,
      };

      setComentarios([...comentarios, novoComentarioObj]);
      setNovoComentario('');
      setAvaliacao(0);
      setImagem(null);
    } else {
      alert('Por favor, adicione um comentário e avaliação antes de continuar.');
    }
  };

  const handleSelecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Desculpe, precisamos das permissões de câmera para fazer isso funcionar!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImagem(result.uri);
    }
  };

  const escalaAvaliacao = ['Péssimo', 'Ruim', 'Regular', 'Bom', 'Ótimo'];

  const handleStarPress = (rating) => {
    setAvaliacao(rating);
    const avaliacaoText = escalaAvaliacao[rating - 1];
    showTooltip(avaliacaoText);
  };

  const showTooltip = (text) => {
    tooltipRef.current.setNativeProps({
      text: text,
    });

    setTimeout(() => {
      tooltipRef.current.setNativeProps({ text: '' });
    }, 1000);
  };

  const editarComentario = (comentario) => {
    setComentarioEditando(comentario);
    setNovoComentario(comentario.texto);
    setAvaliacao(comentario.avaliacao);
    setImagem(comentario.imagem);
  };

  const salvarComentarioEditado = () => {
    if (comentarioEditando) {
      const comentariosAtualizados = comentarios.map((comentario) =>
        comentario.id === comentarioEditando.id
          ? {
              ...comentario,
              texto: novoComentario,
              avaliacao: avaliacao,
              avaliacaoTexto: escalaAvaliacao[avaliacao - 1],
              imagem: imagem,
            }
          : comentario
      );

      setComentarios(comentariosAtualizados);
      setNovoComentario('');
      setAvaliacao(0);
      setImagem(null);
      setComentarioEditando(null);
    }
  };

  const excluirComentario = (comentario) => {
    const comentariosAtualizados = comentarios.filter((c) => c.id !== comentario.id);
    setComentarios(comentariosAtualizados);
  };

  const renderComentario = (item) => {
    return (
      <Swipeable
        rightActionActivationDistance={150}
        rightButtons={[
          <TouchableOpacity style={styles.excluirButton} onPress={() => excluirComentario(item)}>
            <Text style={styles.excluirButtonText}>Excluir</Text>
          </TouchableOpacity>,
        ]}
      >
        <View style={styles.comentario} key={item.id}>
          <TouchableOpacity onPress={() => editarComentario(item)}>
            <Text style={styles.usuario}>{item.usuario}</Text>
            <Text style={styles.texto}>{item.texto}</Text>
            <View style={styles.avaliacao}>
              <Text style={styles.avaliacaoTexto}>Avaliação: {item.avaliacaoTexto}</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={item.avaliacao}
                fullStarColor="#D07B85"
                emptyStarColor="#E4BBB7"
                style={item.postado ? styles.avaliacaoEstrelasPequenas : null}
              />
            </View>
            {item.imagem && <Image source={{ uri: item.imagem }} style={styles.imagemPreview} />}
            <Text style={styles.data}>{item.data}</Text>
          </TouchableOpacity>
        </View>
      </Swipeable>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Adicione um comentário"
        value={novoComentario}
        onChangeText={setNovoComentario}
      />

      <View style={styles.avaliacaoContainer}>
        <View style={styles.avaliacaoRow}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={avaliacao}
            selectedStar={handleStarPress}
            fullStarColor="#D07B85"
            emptyStarColor="#FFD700"
          />
        </View>
        <View style={styles.avaliacaoTextContainer}>
          <Text style={styles.avaliacaoText}>
            {avaliacao > 0 ? escalaAvaliacao[avaliacao - 1] : '       Selecione uma avaliação'}
          </Text>
        </View>
        <View style={styles.tooltip}>
          <Text ref={tooltipRef} style={styles.tooltipText}></Text>
        </View>
      </View>

      <View style={styles.botaoImagemContainer}>
        <TouchableOpacity onPress={handleSelecionarImagem} style={styles.botaoImagem}>
          <Text style={styles.botaoImagemTexto}>Adicionar Imagem</Text>
        </TouchableOpacity>
      </View>

      {imagem && <Image source={{ uri: imagem }} style={styles.imagemPreview} />}
      {comentarioEditando && (
        <TouchableOpacity onPress={salvarComentarioEditado} style={styles.salvarEdicaoButton}>
          <Text style={styles.salvarEdicaoButtonText}>Salvar Edição</Text>
        </TouchableOpacity>
      )}
      <BotaoAdicionarComentario onPress={adicionarComentario} />
      <FlatList
        data={comentarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderComentario(item)}
        style={styles.flat}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  avaliacaoRow: {
    flex: 1,
    alignItems: 'flex-start',
  },
  tooltip: {
    position: 'absolute',
    top: 40,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
    opacity: 0,
  },
  tooltipText: {
    color: 'white',
  },
  botaoImagemContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoImagem: {
    backgroundColor: '#E4BBB7',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  botaoImagemTexto: {
    color: 'white',
    textAlign: 'center',
  },
  imagemPreview: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  comentario: {
    backgroundColor: 'white',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  usuario: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  texto: {
    marginBottom: 10,
  },
  avaliacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  avaliacaoTexto: {
    marginRight: 10,
  },
  data: {
    color: '#888',
  },
  excluirButton: {
    backgroundColor: '#FF0000',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    minHeight: 130,
    maxWidth: 72,
  },
  excluirButtonText: {
    color: '#FFFFFF',
  },
  salvarEdicaoButton: {
    backgroundColor: '#D07B85',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 120,
    marginTop: 10,
  },
  salvarEdicaoButtonText: {
    color: '#FFFFFF',
  },
  avaliacaoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  avaliacaoTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  avaliacaoText: {
    textAlign: 'center',
  },
  avaliacaoEstrelasPequenas: {
    transform: [{ scale: 0.7 }],
  },
  flat: {},
  botaoAdicionarComentario: {
    backgroundColor: '#D07B85',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Comentarios;
