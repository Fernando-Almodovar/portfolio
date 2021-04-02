function deleteUser(users, email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email) {
            users.splice(i,1);
            return users
        }

    }

}