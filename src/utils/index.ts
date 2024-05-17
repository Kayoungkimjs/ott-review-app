/** select option 해당 프로퍼티 찾기 */
export const findOptionProperty = (
  options: CategorySelectOption[],
  value: number,
  property: keyof CategorySelectOption
) => {
  const foundOption = options?.find((option) => option.value === value)
  return foundOption && foundOption[property]
}
