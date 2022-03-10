export const fetchData = (apiAction) => {
  apiAction({
    url: 'https://stellardenverdan.free.beeceptor.com/boat-test/',
    onSuccess: (data) => {
      return {
        type: 'FORM',
        data
      }
    }
  })
  apiAction({
    url: 'https://stellardenverdan.free.beeceptor.com/boat-colors/',
    onSuccess: (data) => {
      return {
        type: 'COLORS',
        data
      }
    }
  })
  apiAction({
    url: 'https://stellardenverdan.free.beeceptor.com/boat-styles/',
    onSuccess: (data) => {
      return {
        type: 'STYLES',
        data
      }
    }
  })
}
export const generateInitialValues = (boatData) => {
  return {
    name: boatData.name || '',
    length: boatData.length || '',
    width: boatData.width || '',
    height: boatData.height || '',
    draft: boatData.draft || '',
    status: boatData.status
  }
}

export const handleSubmit = (values, apiAction) => {
  apiAction({
    url: 'https://stellardenverdan.free.beeceptor.com/boat-save/',
    method: 'POST',
    data: values
  })
}