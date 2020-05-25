import React from "react";
import ContactList from "../../contactList";

export default function Hospital() {
  return (
    <>
      <div className="selection flex jcb ci">
        <div className="country">
          <select className="select-country">
            <option name="country" value="Nepal">
              Nepal
            </option>
            <option name="country" value="India">
              India
            </option>
            <option name="country" value="Maldives">
              Maldives
            </option>
            <option name="country" value="America">
              America
            </option>
            <option name="country" value="China">
              China
            </option>
            <option name="country" value="Laos">
              Laos
            </option>
          </select>
        </div>
        <div className="province">
          <select className="province-select">
            <option name="province" value="Province 1">
              Province 1
            </option>
            <option name="province" value="Province 2">
              Province 2
            </option>
            <option name="province" value="Province 3">
              Province 3
            </option>
            <option name="province" value="Province 4">
              Province 4
            </option>
          </select>
        </div>
      </div>
      <div className="text">Hospital</div>
      <ContactList
        hospital={true}
        hospitalName="Grande Hospital"
        phone="9876676767"
        address="Balaju"
      />
      <ContactList
        hospital={true}
        hospitalName="Grande Hospital"
        phone="9876676767"
        address="Balaju"
      />
      <ContactList
        hospital={true}
        hospitalName="Grande Hospital"
        phone="9876676767"
        address="Balaju"
      />
      <ContactList
        hospital={true}
        hospitalName="Grande Hospital"
        phone="9876676767"
        address="Balaju"
      />
      <ContactList
        hospital={true}
        hospitalName="Grande Hospital"
        phone="9876676767"
        address="Balaju"
      />
      <ContactList
        hospital={true}
        hospitalName="Grande Hospital"
        phone="9876676767"
        address="Balaju"
      />
      <ContactList
        hospital={true}
        hospitalName="Grande Hospital"
        phone="9876676767"
        address="Balaju"
      />
      <ContactList
        hospital={true}
        hospitalName="Grande Hospital"
        phone="9876676767"
        address="Balaju"
      />
    </>
  );
}
