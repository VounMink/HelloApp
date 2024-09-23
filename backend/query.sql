SELECT staff.fcs, staff.id, type_of_equipment.type, technic.name, technic.id as tech_id
FROM employee_equipment, staff, technic, type_of_equipment
WHERE staff.office = 203 AND employee_equipment.employee_id=staff.id AND employee_equipment.id_of_the_equipment=technic.id AND technic.type_of_equipment_id=type_of_equipment.id;