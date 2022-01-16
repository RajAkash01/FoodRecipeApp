import React from "react";
import { useFormikContext } from "formik";
import  {MaterialCommunityIcons} from '@expo/vector-icons';
import {StyleSheet} from  'react-native';
import AppPicker from "../AppPicker";
import ErrorMessages from "../forms/ErrorMessages";
import colors from "../../colors";
import {  TouchableRipple } from 'react-native-paper';

function AppFormPicker({  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width, }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
    <TouchableRipple
         onPress={()=>null}
         rippleColor="#c7c7c7"
        >
      <AppPicker
         items={items}
         numberOfColumns={numberOfColumns}
         onSelectItem={(item) => setFieldValue(name, item)}
         PickerItemComponent={PickerItemComponent}
         placeholder={placeholder}
         selectedItem={values[name]}
         width={width}
      />
      </TouchableRipple>
      <ErrorMessages error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
