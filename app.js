// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      FIND USER BY NAME

// --------------------------------------------------------------

const users=[
    {username:  'MarkBJohns'},
    {username:  'n00bMaster69'},
    {username:  'YellowSnow23'}
];

function findUserByName(arr,searchName){
    return arr.find(function(val){
        return val.username===searchName;
    })
}

// --------------------------------------------------------------

findUserArr.innerText=JSON.stringify(users);

findUserForm.addEventListener('submit',function(e){
    e.preventDefault();
    const findUserText=findUserField.value.trim();
    if(findUserText!==''){
        const result=findUserByName(users,findUserText);
        if(result){
            findUserAnswer.value=JSON.stringify(result);
        }else{
            findUserAnswer.value='User not found';
        }
    }else{
        findUserAnswer.value='Please enter a username';
    }
    findUserField.value='';
})

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      REMOVE USER

// --------------------------------------------------------------

function removeUser(arr,removeName){
    let searchIndex=arr.findIndex(function(val){
        return val.username===removeName;
    })
    if(searchIndex===-1) return;
    return arr.splice(searchIndex,1)[0];
}

// --------------------------------------------------------------

removeUserArr.innerText=JSON.stringify(users);

removeUserForm.addEventListener('submit',function(e){
    e.preventDefault();
    const removeUserText=removeUserField.value.trim();
    if(removeUserText!==''){
        const result=removeUser(users,removeUserText);
        if(result){
            removeUserAnswer.value=JSON.stringify(result);
        }else{
            removeUserAnswer.value='User not found';
        }
    }else{
        removeUserAnswer.value='Please enter a username';
    }
    removeUserField.value='';
    removeUserArr.innerText=JSON.stringify(users);
})