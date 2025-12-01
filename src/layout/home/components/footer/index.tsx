import { Box, Container, Typography } from "@/components";
import Image from "next/image";
import Link from "next/link";
import * as Styles from "./styles";

export function Footer() {
  return (
    <>
      <Styles.Container>
        <Container size="lg"></Container>
        <Container size="lg">
          <Box
            flexDirection={{
              "@initial": "column",
              "@table-min": "row",
            }}
            justifyContent="space-between"
            gap={2}
          >
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Phụ lục
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Quần Áo</Link>
                </li>
                <li>
                  <Link href="">Phụ Kiện</Link>
                </li>
                <li>
                  <Link href="">Đồ Nữ</Link>
                </li>
                <li>
                  <Link href="">Đồ Nam</Link>
                </li>
                <li>
                  <Link href="">Giày</Link>
                </li>
                <li>
                  <Link href="">Hàng mới</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Điều khoản
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Nhãn hiệu</Link>
                </li>
                <li>
                  <Link href="">Liên hệ chúng tôi</Link>
                </li>
                <li>
                  <Link href="">Giới thiệu</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Liên hệ
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">
                    <span>Sunset Shop</span>
                    <br />
                    <span>123 Âu Cơ, Tp.HCM</span>
                    <br />
                  </Link>
                </li>
                <li>
                  <Link href="">shopsunset789@gmail.com</Link>
                </li>
                <li>
                  <Link href="">(84)921222240</Link>
                </li>
              </Styles.List>
            </Box>
            <Box flexDirection="column" gap={1}>
              <Typography fontWeight="500" size="md" color="heading">
                Theo dõi
              </Typography>
              <Styles.List>
                <li>
                  <Link href="">Facebook</Link>
                </li>
                <li>
                  <Link href=""> Twitter</Link>
                </li>
                <li>
                  <Link href="">Instagram</Link>
                </li>
                <li>
                  <Link href="">Pinterest</Link>
                </li>
                <li>
                  <Link href="">Youtube</Link>
                </li>
              </Styles.List>
            </Box>
          </Box>
        </Container>
      </Styles.Container>
      <Container size="lg"></Container>
    </>
  );
}
