import React from "react";

import { Header, PhoneNumber } from "../components";
import phoneNumbers from "../config/numbers.json";
let nums = phoneNumbers.numbers;
class Phone extends React.Component {
  constructor(props) {
    super();
    this.state = {
      numbers: nums,
    };
  }

  filterNumbers = (event) => {
    let updatedList = nums;
    updatedList = updatedList.filter((item) => {
      return (
        item.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ numbers: updatedList });
  };

  render() {
    return (
      <>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="Page" title="Important Phone Numbers" />
        </div>

        {/* add a search bar to filter the numbers */}
        <div className="m-2 md:m-10 mt-6 p-4 md:p-10 bg-white rounded-3xl shadow-lg">
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => this.filterNumbers(e)}
          />
        </div>

        {this.state.numbers.map((number) => (
          <PhoneNumber
            key={number.title}
            title={number.title}
            landline={number.landline}
            mobile={number.mobile}
          />
        ))}
      </>
    );
  }
}

export default Phone;
