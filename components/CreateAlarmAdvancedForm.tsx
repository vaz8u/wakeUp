import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ToggleParameter from './ToggleParameter';
import InputLocation from './InputLocation';
import InputTimePicker from './InputTimePicker';
import { Controller, useForm } from "react-hook-form";
import { useRouter } from 'expo-router';
import { useState } from 'react';

const AdvancedAlarmForm = () => {
  const navigation = useRouter();
  const [isFirstSwitchToggled, setIsFirstSwitchToggled] = useState(false);
  const [isSecondSwitchToggled, setIsSecondSwitchToggled] = useState(false);
  const [isAlarmSoundActivated, setIsAlarmSoundActivated] = useState(false);
  const [isVibratorActivated, setIsVibratorActivated] = useState(false);

  const handleCancelButtonPress = () => {
    navigation.push("/");
  };
  const handleToggleSwitch = (pickerNumber: number) => {
    if (pickerNumber === 1) {
      setIsFirstSwitchToggled(!isFirstSwitchToggled);
      setIsSecondSwitchToggled(false);
    } else if (pickerNumber === 2) {
      setIsFirstSwitchToggled(false);
      setIsSecondSwitchToggled(!isSecondSwitchToggled);
    }
  };
  const handleToggleParameter = (paramTitle: string) => {
    if (paramTitle === 'Son de l\'alarme') {
      setIsAlarmSoundActivated(!isAlarmSoundActivated);
    } else if (paramTitle === 'Vibreur') {
      setIsVibratorActivated(!isVibratorActivated);
    }
  };
  const { control, setValue, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      Name: "",
      Departure: "",
      Arrival: "",
      DepartureTime: { hours:12, minutes:0 },
      ArrivalTime: {hours:12, minutes:0 },
      TimeTriggered: {hours:12, minutes:0}
    },
  });
  const onSubmit = (data: any) => {
    console.log("Affichage des données:");
    console.log("Nom de l'alarme: ", data.Name);
    console.log("Départ de : ", data.Departure);
    console.log("Arrivée à : ", data.Arrival);
    if(isFirstSwitchToggled)
      console.log("Départ à ", data.DepartureTime.hours,"h",data.DepartureTime.minutes);
    if(isSecondSwitchToggled)
      console.log("Arrivée à ", data.ArrivalTime.hours,"h",data.ArrivalTime.minutes);
    console.log("Son de l'alarme: ",isAlarmSoundActivated);
    console.log("Vibreur: ", isVibratorActivated);
  };
  return (
      <View style={[styles.scene]}>
          <Controller control={control} rules={{required: true}}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput label="Nom" value={value} mode="outlined"
            placeholder="Placeholder" right={<TextInput.Icon icon="close" />}
            onBlur={onBlur}
            onChangeText={onChange}/>
          )}
          name="Name"/>
        {errors.Name && <Text style={[styles.text]}>This is required.</Text>}
        <Controller control={control} rules={{required: true}}
          render={({ field: { onChange, onBlur, value } }) => (
          <InputLocation label={"Départ"} value={value} placeholder={"Placeholder"} onBlur={onBlur}
          onChange={onChange}></InputLocation>
          )}
        name="Departure"/>
        {errors.Departure && <Text style={[styles.text]}>This is required.</Text>}
       
          <InputTimePicker name="DepartureTime" label={"Heure de départ :"} optional={true} control={control} setValue={setValue} toggled={isFirstSwitchToggled} onToggleSwitch={() => handleToggleSwitch(1)}></InputTimePicker>
        
          <Controller control={control} rules={{required: true}}
          render={({ field: { onChange, onBlur, value } }) => (
          <InputLocation label={"Arrivée"} value={value} placeholder={"Placeholder"} onBlur={onBlur}
          onChange={onChange}></InputLocation>
          )}
          name="Arrival"/>
        {errors.Arrival && <Text style={[styles.text]}>This is required.</Text>}
        <InputTimePicker name="ArrivalTime" label={"Heure d'arrivée :"} optional={true} control={control} setValue={setValue} toggled={isSecondSwitchToggled} onToggleSwitch={() => handleToggleSwitch(2)}></InputTimePicker>
          <ToggleParameter paramTitle="Son de l'alarme" isParamActivated={isAlarmSoundActivated} onToggle={handleToggleParameter}></ToggleParameter>
          <ToggleParameter paramTitle="Vibreur" isParamActivated={isVibratorActivated} onToggle={handleToggleParameter}></ToggleParameter>
          <View style= {styles.row}>
              <Button mode="contained" onPress={handleCancelButtonPress} disabled={false}>
                  Annuler
              </Button>
              <Button mode="contained" onPress={handleSubmit(onSubmit)}>
                  Créer
              </Button>
          </View>
    </View>
  );
};

export default AdvancedAlarmForm;
const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor:'white',
        padding:10
      },
    row: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textField: {
        flex: 1, // Allow TextInput to take up remaining space
        marginRight: 8, // Add some space between TextInput and Button
        marginTop: 8,
      },
    text:{
      color:"red"
    }
});