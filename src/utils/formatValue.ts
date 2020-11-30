const formatValue = (value: number, type: 'income' | 'outcome' = 'income'): string => {
  return `${type === 'outcome' ? "-" :""} ${Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL',
  }).format(value)}`;
}


export default formatValue;
