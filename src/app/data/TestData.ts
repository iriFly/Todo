import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestData{

  static categories : Category[] = [
  {id: 1, title: 'Work'},
  {id: 2, title: 'Family'},
  {id: 3, title: 'Studies'},
  {id: 4, title: 'Holiday'},
  {id: 5, title: 'Sport'},
  {id: 6, title: 'Food'},
  {id: 7, title: 'Finance'},
  {id: 8, title: 'IT'},
  {id: 9, title: 'Health'},
  {id: 10, title: 'Movies'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Low', color: '#e5e5e5'},
    {id: 2, title: 'Medium', color: '#85DIB2'},
    {id: 3, title: 'High', color: '#F1828D'},
    {id: 4, title: 'Urgent', color: '#F1128D'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Tank the car',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categorie[6],
      date: new Date('2022-06-11')
    },

    {
      id: 2,
      title: 'Prepare weekly analysis',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categorie[0],
      date: new Date('2022-06-24')
    },

    {
      id: 3,
      title: 'Strall in the park with kids',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categorie[1],
      date: new Date('2022-05-09')
    },

    {
      id: 4,
      title: 'Attend IT seminar',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categorie[2],
      date: new Date('2022-05-04')
    },

    {
      id: 5,
      title: 'Weekend spa retreat',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categorie[3],
    },

  ];

}
