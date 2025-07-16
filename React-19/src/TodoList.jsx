import { useState } from "react";

export default function TodoList() {
  const [kegiatan, setKegiatan] = useState("");
  const [list, setList] = useState([]);

  const tambahKegiatan = () => {
    if (kegiatan.trim() === "") return;

    const itemBaru = {
      id: Date.now(), // id unik
      nama: kegiatan,
      selesai: false
    };

    setList([...list, itemBaru]);
    setKegiatan(""); // kosongkan input
  };

  const toggleSelesai = (id) => {
    const listBaru = list.map((item) =>
      item.id === id ? { ...item, selesai: !item.selesai } : item
    );
    setList(listBaru);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Tambahkan kegiatan"
        value={kegiatan}
        onChange={(e) => setKegiatan(e.target.value)}
      />
      <button onClick={tambahKegiatan}>Tambah</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.selesai}
                onChange={() => toggleSelesai(item.id)}
              />
              <span style={{ textDecoration: item.selesai ? "line-through" : "none" }}>
                {item.nama}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
