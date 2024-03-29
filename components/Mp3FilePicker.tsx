import React, { useState } from 'react';
import { View } from '../components/Themed';
import { Text, Button } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';


const Mp3FilePicker = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  
  const pickFile = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "audio/*"
      });
      console.log("test");
      if(result.assets != null){
        alert(result.assets[0].name);
        console.log(result);
      }
      
    } catch (err) {
      // Error handling
      console.log(err);
    }
  };

  return (
    <View>
      <Text>Selected File: {selectedFile ? selectedFile.name : 'None'}</Text>
      <Button title="Pick MP3 File" onPress={pickFile} />
    </View>
  );
};

export default Mp3FilePicker;
