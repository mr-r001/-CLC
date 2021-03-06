import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, ListRequest} from '../../components';
import normalize from 'react-native-normalize';

const CheckSisaPengeluaran = ({navigation}) => {
  const [data, setData] = useState(true);
  return (
    <View style={styles.page}>
      {data ? (
        <View style={styles.page}>
          <Header
            title="List Realisasi"
            onBack
            onPress={() => navigation.goBack()}
          />
          <View style={styles.content}>
            <ScrollView>
              <ListRequest
                kode="3.2.1"
                name="Beli Buku"
                status="Belum Dibelanjakan"
                type="Check"
                onPress={() => navigation.navigate('AddPengeluaran')}
              />
              {/* Jika Sudah Status Sudah Dibelanjakan, Beralih ke Detail */}
              <ListRequest
                kode="3.2.2"
                name="Beli Kursi"
                status="Sudah Dibelanjakan"
                type="Check"
                onPress={() => navigation.navigate('AddPengeluaran')}
              />
            </ScrollView>
          </View>
        </View>
      ) : (
        <View style={styles.null}>
          <LottieView
            source={require('../../assets/Illustrations/NotFound.json')}
            autoPlay
            loop
            style={styles.illustration}
          />
        </View>
      )}
    </View>
  );
};

export default CheckSisaPengeluaran;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: normalize(100),
    marginHorizontal: normalize(20),
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 2,
    paddingVertical: normalize(30),
    borderRadius: normalize(20),
    elevation: 20,
  },
  container: {
    alignItems: 'center',
  },
  null: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: normalize(350),
  },
});
