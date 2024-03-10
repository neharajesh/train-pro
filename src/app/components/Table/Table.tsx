import { TableGenericProps } from "./types";

export const TableGeneric = ({
  headerValues,
  bodyValues,
}: TableGenericProps) => {
  return (
    <table className="w-2/3 px-4 py-2 border border-slate-400">
      <thead>
        <tr>
          {headerValues.map((item) => (
            <th
              className="border border-slate-300 px-4 py-2"
              key={`header-${item}`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {bodyValues.map((item, i) => (
          <tr key={`body-${item.name}-${i}`}>
            <td className="border border-slate-300 px-4 py-2">{item.name}</td>
            <td className="border border-slate-300 px-4 py-2">
              {item.last_check_in}
            </td>
            <td className="border border-slate-300 px-4 py-2">
              {item.plan_due}
            </td>
            {item.actions === "setup" ? (
              <td className="border border-slate-300 px-4 py-2">
                <button className="pr-2">Setup</button>
              </td>
            ) : (
              <td className="border border-slate-300 px-4 py-2 align-middle">
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
