export default function HistoryRow({ data }) {
  return (
    <tr>
      <td>{data.type}</td>
      <td>{data.entrance}</td>
      <td>{data.exit}</td>
      <td>{data.time}</td>
      <td>{data.fee}</td>
    </tr>
  );
}
