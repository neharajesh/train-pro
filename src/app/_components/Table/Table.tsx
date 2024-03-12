import { TableGenericProps } from "./types";
import "./table.css";

export const TableGeneric = ({
  headerValues,
  bodyValues,
}: TableGenericProps) => {
  return (
    <table className="w-2/3 border">
      <thead>
        <tr className="">
          {headerValues.map((item) => (
            <th key={`header-${item}`}>{item}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {bodyValues.map((item: any, i: number) => (
          <tr key={`body-${item.name}-${i}`}>
            <td className="">{item.name}</td>
            <td className="">{item.last_check_in}</td>
            <td className="">{item.plan_due}</td>
            {item.actions === "setup" ? (
              <td className="">
                <button className="pr-2">Setup</button>
              </td>
            ) : (
              <td className=" align-middle">
                <button className="pr-2">
                  <i className="gg-shape-hexagon" />
                </button>
                <button className="pr-2">
                  <i className="gg-bell" />
                </button>
                <button className="pr-2">
                  <i className="gg-trash" />
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
