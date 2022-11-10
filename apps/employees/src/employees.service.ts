import { Injectable, Logger } from "@nestjs/common";
import { CreateEmployeeRequestDto } from "./dto/create-employee-request.dto";
import { EmployeesRepository } from "./employees.repository";
import { UpdateEmployeeRequestDto } from "./dto/update-employee-request.dto";


@Injectable()
export class EmployeesService {

  private readonly logger = new Logger(EmployeesService.name);

  constructor(
    private readonly employeesRepository: EmployeesRepository,
  ) {}

  async createEmployee(request: CreateEmployeeRequestDto) {
    return await this.employeesRepository.create(request);
  }

  async findAll() {
    return await this.employeesRepository.find({});
  }

  async findOne(id: string) {
    return await this.employeesRepository.findOne({ _id: id });
  }

  async update(id: string, request: UpdateEmployeeRequestDto) {
    return await this.employeesRepository.findOneAndUpdate({ _id: id }, request);
  }

  async remove(id: string) {
    return await this.employeesRepository.remove({ _id: id });
  }

  async isValid(document: string): Promise<string> {

    const employees = await this.employeesRepository.find({ document });

    console.log(employees);

    if (employees.length > 0) {
      this.logger.log(`Employee found: ${ document }`);
      return Promise.resolve('SI');
    } else {
      this.logger.log(`Employee not found: ${ document }`);
      return Promise.resolve('NO');
    }

  }

}
