<?php

class Node
{
    public $id;
    public $edges = [];

    public function __construct($id)
    {
        $this->id = $id;
    }

    /**
     * Add an edge to this 
     * and this as edge to the node
     * @param mixed $node 
     * @return void 
     */
    public function addEdge($node)
    {
        if (!is_array($node) && !in_array($node, $this->edges)) {
            $this->edges[] = $node;
            $node->addEdge($this);
        } 
    }

    public function addEdges($nodes)
    {
        if (is_array($nodes))
            foreach ($nodes as $node) {
                $this->addEdge($node);
            }
    }

    public function toString()
    {
        $str = $this->id . ' -> ';
        foreach ($this->edges as $edge) {
            $str .= $edge->id . ', ';
        }
        $str = rtrim($str, ', ');
        return $str;
    }
}

class Graph
{
    public $nodes = [];

    public function __construct($nodes = [])
    {
        $this->nodes = $nodes;
    }

    public function addNode($node)
    {
        $this->nodes[] = $node;
    }

    public function toString()
    {
        $str = '';
        foreach ($this->nodes as $node) {
            $str .= $node->toString();
            $str .= PHP_EOL;
        }
        return $str;
    }
}


$node0 = new Node(0);
$node1 = new Node(1);
$node2 = new Node(2);
$node3 = new Node(3);
$node4 = new Node(4);

$node0->addEdges([$node1, $node3]);
$node1->addEdges([$node0, $node2]);
$node2->addEdges([$node1, $node2, $node3, $node4]);


$graph = new Graph([$node0, $node1, $node2, $node3, $node4]);

echo $graph->toString();

// php graphes.php
// 0 -> 1, 3, 
// 1 -> 0, 2, 
// 2 -> 1, 2, 3, 4, 
// 3 -> 0, 2, 
// 4 -> 2, 