const employee = {
    'name': 'Person',
    'streetAddress': 'person\'s place'
}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const employeeNew = {...employeeObject, [key]: value}
    return employeeNew
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
    employeeObject[key] = value
    return employeeObject
}

function deleteFromEmployeeByKey(employeeObject, key) {
    const employeeNew = {...employeeObject}
    delete employeeNew[key]
    return employeeNew
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employeeObject[key]
    return employeeObject
}