/**
 *
 * Dummy types for materializecss
 * Documentation: @link https://materializecss.com/autocomplete.html
 *
 */

export interface AutocompleteOptionDataType {
  [id: string]: string
}

export type AutocompleteOptions = {
  data?: AutocompleteOptionDataType //Data object defining autocomplete options with optional icon strings.
  limit?: number //Limit of results the autocomplete shows.
  onAutocomplete?: CallableFunction //Callback for when autocompleted.
  minLength?: number //	Minimum number of characters before autocomplete starts.
  sortFunction?: CallableFunction //	Sort function that defines the order of the list of autocomplete options.
}

export type AutocompleteInstanceType = {
  close: () => void
  open: () => void
  destroy: () => void
  updateData: (o: AutocompleteOptionDataType) => void
}

export interface AutocompleteType {
  init: (a: HTMLInputElement, b: AutocompleteOptions) => AutocompleteInstanceType
}
export interface MType {
  Autocomplete: AutocompleteType
}

/* ****************************************** */
