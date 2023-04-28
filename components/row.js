import React from "react";

const Row = (props) => {
  return (
    <div>
      <div class="flex-1 ml-72">
        <tbody>
          <tr class="bg-white border-b ">
            <th scope="row" class="px-6 py-4 ">
              {props.name}
            </th>
            <td class="px-6 py-4">Silver</td>
          </tr>
          <tr class="bg-white border-b 0">
            <th scope="row" class="px-6 py-4  ">
              {props.color}
            </th>
            <td class="px-6 py-4">White</td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};

export default Row;
