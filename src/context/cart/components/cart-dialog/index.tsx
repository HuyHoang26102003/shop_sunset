import { Box, Button, Typography } from "@/components";
import { ButtonIcon } from "@/components/common/button-icon";
import { toLocaleString } from "@/utils/helpers";
import { useCart } from "../..";
import { ProductItem } from "./components";
import * as Styles from "./styles";
import { CartDialogProps } from "./types";

export function CartDialog(props: CartDialogProps) {
  const { totalProducts, resumeBuy, cart, cartItems, onRemove } = useCart();

  const hasProducts = cartItems.length > 0;

  const renderSubTotal = () => {
    if (!resumeBuy?.subTotal) return null;

    return (
      <Box justifyContent="space-between">
        <Typography fontWeight="600" color="heading" size="xsm">
          Tổng Tiền
        </Typography>
        <Typography size="xsm">
          {toLocaleString(resumeBuy?.subTotal)}
        </Typography>
      </Box>
    );
  };

  const renderEmptyMessage = () => {
    if (hasProducts) return null;

    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography textAlign="center" size="xsm">
          Không có gì trong giỏ hàng cả
        </Typography>
      </Box>
    );
  };

  const renderProducts = cartItems.map((value, index) => (
    <ProductItem
      key={index}
      data={value}
      onRemove={() => onRemove(value.product.id, value.size.label)}
    />
  ));
  return (
    <Styles.Root {...props} modal>
      <Styles.Overlay />
      <Styles.Portal>
        <Styles.Content>
          <Styles.Header>
            <Typography as="strong" color="heading" size="md">
              Giỏ hàng
            </Typography>
            <Styles.Close asChild>
              <ButtonIcon label="close" icon={{ name: "close" }} />
            </Styles.Close>
          </Styles.Header>
          <Styles.ScrollView>
            {renderProducts}
            {renderEmptyMessage()}
          </Styles.ScrollView>
          {hasProducts && (
            <Styles.ResumeView>{renderSubTotal()}</Styles.ResumeView>
          )}
          {hasProducts && (
            <Box style={{ padding: "1rem" }} fullWidth>
              <Button fullWidth>Mua</Button>
            </Box>
          )}
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  );
}
