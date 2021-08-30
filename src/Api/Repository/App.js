import ApiService from '../ApiService'

export async function checkPendingQuestionnaires () {
  const targetPath = '/check_pending_questionnaires'
  const response = await ApiService.get(targetPath)
  if (response.status === 200) {
    return {
      data: response.data
    }
  } else {
    return null
  }
}

export async function myFoodsRawMaterials (dailyImageUrl = '', frequency, rawMaterial = '', rawMaterialEdited = '', barcode = '') {
  const targetPath = '/my_foods_raw_materials'
  const param = {
    "datum": [
      {
        "daily_image_url": dailyImageUrl,
        "frequency": frequency,
        "raw_material": rawMaterial,
        "raw_material_edited": rawMaterialEdited,
        "barcode": barcode
      }
    ]
  }
  const response = await ApiService.post(targetPath, param)
  if (response.status === 201) {
    return {
      data: response.data
    }
  } else {
    return null
  }
}
