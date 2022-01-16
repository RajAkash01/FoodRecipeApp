import React from 'react';
import AppButton2 from '../AppButton2';
import {useFormikContext} from 'formik';

function SubmitButton({title,icon,backgroundColor,btnsecondarycolor,}) {
    const {handleSubmit}= useFormikContext();
    return (
        <AppButton2 title={title} onPress={handleSubmit} icon={icon} backgroundColor={backgroundColor} btnsecondarycolor={btnsecondarycolor}  />
    );
}

export default SubmitButton;