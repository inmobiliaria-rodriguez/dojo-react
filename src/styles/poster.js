import { StyleSheet } from 'react-native';
import { ColorPalette } from '../constants';

export const posterStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    poster: {
      width: 200,
      height: 300,
    },
    year: {
      marginTop: 10,
      fontSize: 18, // Ajusta el tamaño de fuente según tus preferencias.
    },
    text: {
        color: ColorPalette.PRIMARY,
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
    },
});