import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common";
import { Employee } from "./schemas/employee.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";

@Injectable()
export class EmployeesRepository extends AbstractRepository<Employee> {

    protected readonly logger = new Logger(EmployeesRepository.name);

    constructor(
      @InjectModel(Employee.name) employeeModel: Model<Employee>,
      @InjectConnection() connection: Connection
    ) {
      super(employeeModel, connection);
    }
}
