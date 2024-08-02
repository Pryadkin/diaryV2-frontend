import { axiosWithAuth } from '@/shared/api/interceptors'

import { ITimeBlockResponse } from './time-block.types'
import { TypeTimeBlockFormState } from './time-block.types'

class TimeBlockService {
	private BASE_URL = '/user/time-blocks'

	async getTimeBlock() {
		const response = await axiosWithAuth.get<ITimeBlockResponse>(this.BASE_URL)

		return response
	}

	async createTimeBlock(data: TypeTimeBlockFormState) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)

		return response
	}

	async updateOrderTimeBlock(ids: string[]) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/update-order`)

		return response
	}

	async updateTimeBlock(id: string, data: TypeTimeBlockFormState) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)

		return response
	}

	async deleteTimeBlock(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)

		return response
	}
}

export const timeBlockService = new TimeBlockService()
