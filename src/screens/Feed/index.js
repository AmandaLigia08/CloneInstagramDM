import React from 'react';
import { View, SafeAreaView, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

function Feed() {
  const posts = [
    {
      id: '1',
      author: 'amandaligia1',
      picture_url:
        'https://www.circuitocinemas.com.br/fotos/img_destaque3/mobile/1049.jpg',
      likes: 1272,
      description: 'SAIU O FILME NOVO DO CORINGA  !!!',
      hashtags: '#cinema #joker',
      place: 'SHOPPING DE PATOS'
    },
    {
      id: '2',
      author: 'amandaligia1',
      picture_url:
        'https://pbs.twimg.com/media/EFPrhYzU8AAohGb?format=jpg&name=900x900',
      likes: 784,
      description: 'SAIU O FILME DO JUMANJI  !!!',
      hashtags: '#cinema #jumanji',
      place: 'SHOPPING DE PATOS  '
    },
    {
      id: '3',
      author: 'amandaligia1',
      picture_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS-NqhrqDCRP1vKEM2gxe2Igu6J0hBin1EaV6RsfEVYaZnnuYka&usqp=CAU',
      likes: 397,
      description: 'SAIU O FILME DO SONIC  !!!',
      hashtags: '#cinema #sonic',
      place: 'SHOPPING DE PATOS  '
    }
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  description: {
    color: '#000',
    lineHeight: 18
  }
});

export default Feed;
