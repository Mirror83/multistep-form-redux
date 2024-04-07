// TODO: Make this more general, such that it can format prices for add-ons
// and plans

export function formatPrice(price: number, period: "monthly" | "yearly") {
  return "$" + period === "monthly" ? `${price}/mo` : `${price}/yr`
}
