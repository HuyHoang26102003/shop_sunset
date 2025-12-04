import { useState } from "react";
import { useRouter } from "next/router";

import { Head, Typography } from "@/components";
import { Input } from "@/components/common/input";
import { Button } from "@/components/common/button";
import users from "@/data/users.json";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!foundUser) {
      setError("Sai tên đăng nhập hoặc mật khẩu.");
      return;
    }

    setSuccess(`Xin chào, ${foundUser.name}!`);
    // After showing success message briefly, redirect to homepage
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  return (
    <>
      <Head title="Login" description="Login page" />

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          padding: "1.5rem",
        }}
      >
        <section
          style={{
            width: "100%",
            maxWidth: 400,
            background: "#ffffff",
            borderRadius: 12,
            padding: "2rem",
            boxShadow:
              "0 10px 25px rgba(15, 23, 42, 0.08), 0 0 1px rgba(15, 23, 42, 0.06)",
          }}
        >
          <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <Typography as="h1" size="lg" fontWeight="600" color="heading">
              Sunset Shop
            </Typography>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "1rem" }}
          >
            <Input
              label="Tên đăng nhập"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
            />

            <Input
              label="Mật khẩu"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            {error && (
              <Typography size="xsm" color="error">
                {error}
              </Typography>
            )}

            {success && (
              <Typography size="xsm" color="primary">
                {success}
              </Typography>
            )}

            <Button type="submit" fullWidth>
              Đăng nhập
            </Button>
          </form>
        </section>
      </main>
    </>
  );
}
