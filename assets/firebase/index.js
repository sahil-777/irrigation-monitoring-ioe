let rootRef = firebase.database().ref('/');
rootRef.on('child_changed', (childSnapshot, prevChildKey) => {
    let val = childSnapshot.val();
    addValue(val);
});
