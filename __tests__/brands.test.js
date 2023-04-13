import { getBrands } from '../graphql/schema'

describe('getBrands', () => {
  it('should return an array of brands with property name', async () => {
    const brands = await getBrands()
    expect(brands).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String)
        })
      ])
    )
  })

  it('should return an array of brands with length 3', async () => {
    const brands = await getBrands()
    expect(brands).toHaveLength(3)
  })
})
