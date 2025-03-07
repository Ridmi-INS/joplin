import { SqlQuery } from '../../services/database/types';

export enum PaginationOrderDir {
	ASC = 'ASC',
	DESC = 'DESC',
}

export interface PaginationOrder {
	by: string;
	dir: PaginationOrderDir;
	caseInsensitive: boolean;
}

export interface Pagination {
	limit: number;
	order: PaginationOrder[];
	page: number;
	caseInsensitive?: boolean;
}

export interface LoadOptions {
	caseInsensitive?: boolean;
	fields?: string | string[];
	where?: string;
	whereParams?: any[];
	order?: {
		by: string;
		dir: string;
		caseInsensitive?: boolean;
	}[];
	limit?: number;
}

export interface FolderLoadOptions extends LoadOptions {
	includeConflictFolder?: boolean;
}

export interface SaveOptions {
	isNew?: boolean;
	oldItem?: any;
	userSideValidation?: boolean;
	nextQueries?: SqlQuery[];
	autoTimestamp?: boolean;
	provisional?: boolean;
	ignoreProvisionalFlag?: boolean;
	dispatchUpdateAction?: boolean;
	changeSource?: number;
	disableReadOnlyCheck?: boolean;
}
