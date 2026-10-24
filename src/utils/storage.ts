// JSON hỏng hoặc bị chặn lưu trữ sẽ dùng dữ liệu mặc định.
export function loadSaved<T>(key: string, fallback: T): T {
  try {
    return JSON.parse(localStorage.getItem(key) || "null") ?? fallback;
  } catch {
    return fallback;
  }
}
