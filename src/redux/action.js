export const setForm =(inputType, value)=>{
    return {type:'SET_FORM', inputType:inputType,inputValue:value}
};
export const setList =(inputType, value)=>{
    return {type:'SET_LIST', inputType:inputType,inputValue:value}
};