import customers from './customers.js'


let person = [{
    thumbNail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
    name: "Pauline Hughes",
    email: "pauline.hughes@example.com",
    address: "3747 Elgin St, Roseville, IN 93281"
}]


function listCustomers(personArray) {
    let customerList = document.querySelector('#customer-list');
    console.log(customerList)

    for (let customer of customers) {
        let newCustomer = document.createElement("li");

        let customerText = document.createTextNode(`${customer.name.title} ${customer.name.first} ${customer.name.last} located in:${customer.location.street} ${customer.location.city}, ${customer.location.state}       Date of Birth: ${customer.dob}, Date Joined: ${customer.registered}`);

        let customerEmail = document.createTextNode(`${customer.email}`);

        let address = document.createElement("p");
        let email = document.createElement("p");
        address.classList.add("address", "measure", "lh-copy");
        email.classList.add("email", "measure", "2h-copy");

        address.appendChild(customerText);
        email.appendChild(customerEmail);

        newCustomer.append(address, email)

        let customerImage = document.createElement("img");
        customerImage.classList.add("br-100", "h4", "w4", "dib", "ba", "b--black-05", "pa2");
        customerImage.src = `${customer.picture.thumbnail}`;

        newCustomer.prepend(customerImage);
        newCustomer.classList.add("ph3", "pv3", "bb", "b--light-silver");
        customerList.append(newCustomer);
    };



}

listCustomers(person);
