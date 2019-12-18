
export type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
	url: string
	method?: Method
	data?: any
	params?: any
	headers?: any
	responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse {
	data: any
	status: number
	statusText: string
	Headers: any
	config: AxiosRequestConfig
}

export interface AxiosPromise extends Promise<AxiosResponse> {

}