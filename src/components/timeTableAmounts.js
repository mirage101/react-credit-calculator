import React from "react";

function timeTableAmount(props) {
  let salary = props.salary;
  let percents = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
  let years = [1, 5, 10, 15, 20, 25, 30, 35];
  let sum = salary / percents; //amount/% *12 first year //*years for others
  //
  return (
    <div>
      <div id="time-table">
        <table class="row-info">
          <thead>
            <tr>
              <th>&nbsp;</th>
              {percents.map((percent, index) => {
                return <th>{percent}%</th>;
              })}
            </tr>
          </thead>
        </table>
        <table>
          <thead>
            {years.map((year, index) => {
              return <th>{year}y</th>;
            })}
          </thead>
          <tbody>
            {percents.map((percent, i) => {
              return (
                <tr>
                  {years.map((year, j) => {
                    return (
                      <td>
                        {(
                          (salary * (percents[i] / 100) * years[j] * 12) /
                          2
                        ).toFixed(2)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div id="legend">
        {percents.map((percent, i) => {
          return (
            <>
              <div class="percent-calc">
                <div class="percent">{percent}%</div>
                <div>{(salary * percent) / 100 / 2}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default timeTableAmount;
