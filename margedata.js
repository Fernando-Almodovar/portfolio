function mergeData(users, attendance) {
    for (let i = 0; i < users.length; i++) {
        let first = users[i];
        for (let j = 0; j < attendance.length; i++) {
            let second = attendance[j];
            if (first.email === second.email) {
            first.attendance = second.attendance;
            }
        }
    }

    return users;
}
