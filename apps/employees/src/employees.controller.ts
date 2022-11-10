import { Body, Controller, Delete, Get, Logger, Param, Patch, Post } from "@nestjs/common";
import { EmployeesService } from './employees.service';
import { CreateEmployeeRequestDto } from "./dto/create-employee-request.dto";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Employee } from "./schemas/employee.schema";
import { UpdateEmployeeRequestDto } from "./dto/update-employee-request.dto";
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import { RmqService } from "@app/common";

@ApiBearerAuth()
@ApiTags('employees')
@Controller('employees')
export class EmployeesController {

  private readonly logger = new Logger(EmployeesController.name);

  constructor(
    private readonly employeesService: EmployeesService,
    private readonly rmqService: RmqService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create employee' })
  @ApiResponse({ status: 201, description: 'Created' })
  async createEmployee(@Body() request: CreateEmployeeRequestDto) {
    return this.employeesService.createEmployee(request);
  }

  @Get()
  @ApiOperation({ summary: 'Get all employees' })
  @ApiResponse({
    status: 200,
    description: 'All the employees',
    type: Array<Employee>
  })
  async findAll() {
    return this.employeesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Employee,
  })
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update employee' })
  @ApiResponse({
    status: 200,
    description: 'The updated record',
    type: Employee,
  })
  patch(@Param('id') id: string, @Body() updateEmployeeRequestDto: UpdateEmployeeRequestDto) {
    return this.employeesService.update(id, updateEmployeeRequestDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete employee' })
  @ApiResponse({
    status: 200,
    description: 'The deleted record',
    type: Employee,
  })
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }

  @EventPattern('isValid')
  async isValid(@Payload() data: any, @Ctx() context: RmqContext) {
    this.logger.log('Validating ...', data);
    const response = await this.employeesService.isValid(data);
    this.rmqService.ack(context);
    return response;
  }

}
